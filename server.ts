import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export interface BoutiqueEnquiry {
  id: string;
  name: string;
  contact: string;
  category: string;
  message: string;
  createdAt: string;
}

const enquiries: BoutiqueEnquiry[] = [];

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // API Route: Handle boutique enquiries
  app.post('/api/enquiries', (req, res) => {
    try {
      const { name, contact, category, message } = req.body;

      if (!name || typeof name !== 'string' || name.trim().length < 2) {
        return res.status(400).json({ error: 'Please enter a valid name (at least 2 characters).' });
      }

      if (!contact || typeof contact !== 'string' || contact.trim().length < 5) {
        return res.status(400).json({ error: 'Please enter a valid contact number or email address.' });
      }

      const trimmedContact = contact.trim();
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedContact);
      const isPhone = /^[\d+()\-\s]{7,25}$/.test(trimmedContact);
      if (!isEmail && !isPhone) {
        return res.status(400).json({ error: 'Please provide either a valid email address or phone number.' });
      }

      if (!category || typeof category !== 'string' || !category.trim()) {
        return res.status(400).json({ error: 'Please select an enquiry category.' });
      }

      if (!message || typeof message !== 'string' || message.trim().length < 5) {
        return res.status(400).json({ error: 'Please enter a message of at least 5 characters.' });
      }

      const newEnquiry: BoutiqueEnquiry = {
        id: `JB-${Date.now().toString(36).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`,
        name: name.trim(),
        contact: trimmedContact,
        category: category.trim(),
        message: message.trim(),
        createdAt: new Date().toISOString()
      };

      enquiries.unshift(newEnquiry);
      console.log(`[Jhalak Boutique] New enquiry received:`, newEnquiry.id);

      return res.status(201).json({
        success: true,
        referenceId: newEnquiry.id,
        message: 'Your enquiry has been received by Jhalak Boutique. We will get back to you shortly.',
        timestamp: newEnquiry.createdAt
      });
    } catch (err) {
      console.error('Error handling enquiry:', err);
      return res.status(500).json({ error: 'A server error occurred while processing your enquiry. Please try again.' });
    }
  });

  // Query all received enquiries
  app.get('/api/enquiries', (_req, res) => {
    res.json({ success: true, count: enquiries.length, enquiries });
  });

  // Health check endpoint
  app.get('/api/health', (_req, res) => {
    res.json({
      status: 'healthy',
      boutique: 'Jhalak Boutique',
      location: 'Ali Mohammad Bazaar, Dubai Chowk, Tajpura, Lahore, Pakistan',
      timestamp: new Date().toISOString()
    });
  });

  // Vite integration
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Jhalak Boutique server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();

import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/info', (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'URL is required' });

  res.json({
    success: true,
    metadata: {
      thumbnail: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&h=500&fit=crop',
      description: 'Sample TikTok video',
      author: { username: '@creator', nickname: 'Creator', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop' }
    },
    formats: [
      { id: 'no-watermark', label: 'No Watermark', url: 'https://example.com/no-watermark.mp4' },
      { id: 'with-watermark', label: 'With Watermark', url: 'https://example.com/with-watermark.mp4' }
    ]
  });
});

app.listen(PORT, () => console.log(`✅ Server di http://localhost:${PORT}`));

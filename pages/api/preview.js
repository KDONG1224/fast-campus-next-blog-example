export default function handler(req, res) {
  if (req.query.token !== 'kdong' || !req.query.post) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  res.setPreviewData({});

  res.redirect(`/post/${req.query.post}`);
}

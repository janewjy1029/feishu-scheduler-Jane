export default async function handler(req, res) {
  await triggerPush('reminder');
  res.json({ success: true });
}

async function triggerPush(type) {
  await fetch('https://j2cmgf9cpf.coze.site/api/schedule-push', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type }),
  });
}

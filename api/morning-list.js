export default async function handler(req, res) {
  await triggerPush('list');
  res.json({ success: true });
}

async function triggerPush(type) {
  await fetch('https://8dg2k4pmmh.coze.site/api/schedule-push', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type }),
  });
}

import {db} from '@/lib/firebase-admin'

export default async function handler(req, res) {
  try {
    const entries = await db.collection("sites").get();
    const sites = entries.docs.map((entry) => ({
      id: entry.id,
      ...entry.data(),
    }));
    res.status(200).json({ sites });
  } catch (e) {
    res.status(400).end();
  }
}


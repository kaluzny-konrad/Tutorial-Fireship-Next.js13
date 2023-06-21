import styles from '@/components/notes/Notes.module.css';
import { notFound } from 'next/navigation'

export default async function page({ params }: any) {
  const note = await getNote(params.id);

  if(!note) notFound();

  return <div>
    <h1>notes/{note.id}</h1>
    <div className={styles.note}>
        <h3>{note.title}</h3>
        <h5>{note.content}</h5>
        <p>{note.created}</p>
    </div>
  </div>;
}

async function getNote(noteId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
    {
      next: { revalidate: 10 },
    }
  );
  if(!res.ok) return undefined;
  return res.json();
}

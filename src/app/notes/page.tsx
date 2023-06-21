import React from "react";
import { getNotes } from "@/hooks/getNotes";
import { Note } from "@/components/notes/Note";
import CreateNote from "@/components/notes/CreateNote";
import styles from '@/components/notes/Notes.module.css';

export default async function page() {
  const notes = await getNotes();

  return (
    <div>
      <h1>Notes</h1>
      <div className={styles.grid}>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>

      <CreateNote />
    </div>
  );
}


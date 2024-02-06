"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Color } from '@tiptap/extension-color'
import { Highlight } from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import TextStyle from '@tiptap/extension-text-style'
import { Toolbar } from "./toolbar";

export function Editor({ setDocu }: { setDocu: any }){
  const editor = useEditor({
    editorProps: {
      attributes: {
        // Add styles to editor element
        // class: styles.editor,
      },
    },
    
    onUpdate({ editor }) {
      setDocu(editor.getHTML());
    },

    extensions: [
      StarterKit.configure({
        history: false,
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Document, Paragraph, Text, TextStyle, Color, Highlight, 
      // TextDirection
    ],
  });

  return (<div className="w-full mx-auto py-4">      
      <div className="">
        <Toolbar editor={editor} />
      </div>
      <div className="mt-4 border-2 border-gray-200 bg-gray-50 rounded-lg p-2 focus-within:ring-[#FF0020] focus-within:border-[#FF0020]">
        <EditorContent editor={editor} />
      </div>
    </div>)
}

import { useEffect } from "react";

interface MetaProps {
  meta: {
    title: string;
    description?: string;
  };
}

export default function MetaComponent({ meta }: MetaProps) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = meta.title;

    return () => {
      document.title = previousTitle || "Sudharsan | Portfolio";
    };
  }, [meta.title]);

  return null;
}

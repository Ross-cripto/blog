export function PostBody({ html }: { html: string }) {
  return (
    <div
      className="prose dropcap text-[1.1rem] md:text-[1.16rem] leading-[1.78]"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`relative ${className}`.trim()}>
      {children}
    </section>
  );
}

export default Section;
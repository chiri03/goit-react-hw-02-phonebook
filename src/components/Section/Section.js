export const Section = ({ title, children }) => { 
    return (
    <section>
        <h1 className="SectionTitle">{title}</h1>
        {children}
  </section>
);
}
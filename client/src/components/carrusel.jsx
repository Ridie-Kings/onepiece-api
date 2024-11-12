import './carrusel.css';
export const Carrusel = ({ crew }) => {
  return (
    <section>
      {crew.members.map((member, index) => (
        <div key={index}>
          <img src={member.img}></img>
        </div>
      ))}
    </section>
  );
};

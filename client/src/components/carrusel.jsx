export const Carrusel = ({ crew }) => {
  return (
    <section class="flex w-full h-full">
      {crew.members.map((member, index) => (
        <div key={index}>
          <img src={member.image} class="flex-grow h-96 w-28 object-cover object-top opacity-80 transition ease duration-500 hover:opacity-100 hover:w-80 hover:contrast-120" alt="Character img"></img>
        </div>
      ))}
    </section>
  );
};

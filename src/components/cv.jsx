export default function CV({ details }) {
  if (Object.keys(details).length !== 0) {
    //Non-empty object means some data was entered
  }
  return (
    <div className="cv-container flex flex-col gap-2 bg-[#f2f2f2] p-2 border-1 rounded-s">
      <p className="font-serif font-extrabold text-2xl">
        {details.firstname} {details.surname}
      </p>
    </div>
  );
}

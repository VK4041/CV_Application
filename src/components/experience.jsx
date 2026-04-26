export function ExperienceInput({ exp, handleArray }) {
  return (
    <>
      <div className="flex">
        <input
          type="text"
          className="flex-1"
          placeholder="Company Name"
          name="cname"
          onChange={(event) => {
            event.stopPropagation();
            handleArray(exp.id, event.target.name, event.target.value, 'experience')
          }}
        />
        <input
          type="text"
          className="flex-1"
          placeholder="Job Title"
          name="jtitle"
          onChange={(event) => {
            event.stopPropagation();
            handleArray(exp.id, event.target.name, event.target.value, 'experience')
          }}
        />
      </div>
      <div className="flex">
        <input
          type="text"
          className="flex-1"
          placeholder="Job City"
          name="jcity"
          onChange={(event) => {
            event.stopPropagation();
            handleArray(exp.id, event.target.name, event.target.value, 'experience')
          }}
        />
        <input
          type="text"
          className="flex-1"
          placeholder="Job State"
          name="jstate"
          onChange={(event) => {
            event.stopPropagation();
            handleArray(exp.id, event.target.name, event.target.value, 'experience')
          }}
        />
      </div>
      <label htmlFor="jfrom">From</label>
      <input
        type="month"
        name="jfrom"
        className="w-max"
        placeholder="From"
        onChange={(event) => {
          event.stopPropagation();
          handleArray(exp.id, event.target.name, event.target.value, 'experience')
        }} />
      <label htmlFor="jto">To</label>
      <input
        type="month"
        className="w-max"
        name="jto"
        onChange={(event) => {
          event.stopPropagation();
          handleArray(exp.id, event.target.name, event.target.value, 'experience')
        }} />
      <textarea
        name="jdesc"
        placeholder="Enter description separated by newline"
        onChange={(event) => {
          event.stopPropagation();
          handleArray(exp.id, event.target.name, event.target.value, 'experience')
        }}
      />
    </>
  );
}
export function ExperienceGenerator({ exp, isEmpty }) {
  return (
    <div>
      <p className="capitalize">
        <span className="font-medium">{exp.jtitle}</span>
        {!isEmpty(exp.cname) && (
          <span> - {exp.cname}</span>
        )}
      </p>
      <p className='capitalize italic'>
        <span>{exp.jcity}</span>
        {!isEmpty(exp.jstate) && (
          <span className='uppercase'>
            , {exp.jstate}
          </span>
        )}
        {!isEmpty(exp.jfrom) && (
          <span>
            {' · '}
            {getFormattedDate(exp.jfrom)} - {isEmpty(exp.jto) ? "Present" : getFormattedDate(exp.jto)}
          </span>
        )}
      </p>
      <div className="flex flex-col gap-2">
        {!isEmpty(exp.jdesc) && generateDescBullets(exp.jdesc).map((bullet, index) => <p key={index}>{bullet}</p>)}
      </div>
    </div >
  );
}
function getFormattedDate(dateStr) {
  if (!dateStr) return null
  const date = new Date(dateStr)
  return date.toLocaleString('default', { month: 'long' }) + ' ' + date.toLocaleString('default', { year: 'numeric' })
}
function generateDescBullets(desc) {
  let lines = desc.split('\n');
  lines = lines.filter(line => line.trim() !== '');
  lines = lines.map(line => {
    line = line.trim()
    line = line
      .slice(0, 1)
      .toUpperCase()
      .concat(line.slice(1));
    line = (line.slice(-1) !== '.') ? line.concat('.') : line;
    return '* ' + line;
  })
  return lines;
}
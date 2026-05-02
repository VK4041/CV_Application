export function ExperienceInput({ exp, updater, deleter }) {
  return (
    <div className="input-row flex-col bg-blue-50 p-4 rounded-xl">
      <div className="flex">
        <input
          type="text"
          className="flex-1"
          placeholder="Company Name"
          name="cname"
          onChange={(event) => {
            event.stopPropagation();
            updater(exp.id, event.target.name, event.target.value, 'experiences')
          }}
        />
        <input
          type="text"
          className="flex-1"
          placeholder="Job Title"
          name="jtitle"
          onChange={(event) => {
            event.stopPropagation();
            updater(exp.id, event.target.name, event.target.value, 'experiences')
          }}
        />
        <button className="rounded-2xl p-2 text-m hover:bg-red-600 hover:text-white"
          type='button'
          onClick={() => {
            deleter(exp, 'experiences')
          }}
        >
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
      <div className="flex">
        <input
          type="text"
          className="flex-1"
          placeholder="Job City"
          name="jcity"
          onChange={(event) => {
            event.stopPropagation();
            updater(exp.id, event.target.name, event.target.value, 'experiences')
          }}
        />
        <input
          type="text"
          className="flex-1"
          placeholder="Job State"
          name="jstate"
          onChange={(event) => {
            event.stopPropagation();
            updater(exp.id, event.target.name, event.target.value, 'experiences')
          }}
        />
      </div>
      <label htmlFor="jfrom">From</label>
      <input
        type="month"
        name="jfrom"
        className="w-max"
        onChange={(event) => {
          event.stopPropagation();
          updater(exp.id, event.target.name, event.target.value, 'experiences')
        }} />
      <label htmlFor="jto">To</label>
      <input
        type="month"
        className="w-max"
        name="jto"
        onChange={(event) => {
          event.stopPropagation();
          updater(exp.id, event.target.name, event.target.value, 'experiences')
        }} />
      <textarea
        name="jdesc"
        placeholder="Enter description separated by newline"
        onChange={(event) => {
          event.stopPropagation();
          updater(exp.id, event.target.name, event.target.value, 'experiences')
        }}
      />
    </div >
  );
}
export function ExperienceGenerator({ exp, isEmpty, dateFormatter }) {
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
          <span>
            , {exp.jstate}
          </span>
        )}
        {!isEmpty(exp.jfrom) && (
          <span>
            {' · '}
            {dateFormatter(exp.jfrom)} - {isEmpty(exp.jto) ? "Present" : dateFormatter(exp.jto)}
          </span>
        )}
      </p>
      <div className="flex flex-col gap-2">
        {!isEmpty(exp.jdesc) && generateDescBullets(exp.jdesc).map((bullet, index) => <p key={index}>{bullet}</p>)}
      </div>
    </div >
  );
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
    return '• ' + line;
  })
  return lines;
}
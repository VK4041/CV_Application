export function EducationInput({ edu, updater, deleter }) {
    return (
        <div className="input-row flex-col bg-blue-50 p-4 rounded-xl">
            <div className="flex">
                <input type="text"
                    className="flex-1"
                    name='eduname'
                    placeholder='Institution Name'
                    onChange={(event) => {
                        event.stopPropagation();
                        updater(edu.id, event.target.name, event.target.value, 'education')
                    }} />
                <input type="text"
                    className="flex-1"
                    placeholder="City"
                    name='educity'
                    onChange={(event) => {
                        event.stopPropagation();
                        updater(edu.id, event.target.name, event.target.value, 'education')
                    }}
                />
                <button className="rounded-2xl p-2 text-m hover:bg-red-600 hover:text-white"
                    type='button'
                    onClick={() => {
                        deleter(edu, 'education')
                    }}
                >
                    <i className="fa-regular fa-trash-can"></i>
                </button>
            </div>
            <div className="flex">
                <input type="text"
                    className="flex-1"
                    name='qualname'
                    placeholder='Qualification Name'
                    onChange={(event) => {
                        event.stopPropagation();
                        updater(edu.id, event.target.name, event.target.value, 'education')
                    }} />
            </div>
            <div className="flex">
                <label htmlFor="graduated">Graduated</label>
                <input type="checkbox"
                    name='graduated'
                    className="mx-2"
                    onChange={(event) => {
                        event.stopPropagation();
                        updater(edu.id, event.target.name, event.target.checked, 'education')
                    }}
                />
            </div>
            {edu.graduated && (
                <>
                    <label htmlFor="gradate">Graduation Date</label>
                    <input
                        type="month"
                        name="gradate"
                        className="w-max"
                        placeholder="Graduation Date"
                        onChange={(event) => {
                            event.stopPropagation();
                            updater(edu.id, event.target.name, event.target.value, 'education')
                        }} />
                    <label htmlFor="wam">WAM</label>
                    <input type="number"
                        name='wam'
                        className="w-max"
                        placeholder="0-100"
                        onChange={(event) => {
                            event.stopPropagation();
                            updater(edu.id, event.target.name, event.target.value, 'education')
                        }} />
                </>
            )}
        </div>
    );
}
export function EducationGenerator({ edu, isEmpty, dateFormatter }) {
    return (
        <div>
            <p className="font-bold capitalize">
                {edu.qualname}
                {!isEmpty(edu.eduname) && (<span> - {edu.eduname}</span>)}
                {!isEmpty(edu.educity) && (<span>, {edu.educity}</span>)}
            </p>
            <p className="italic">
                {edu.graduated ? (
                    <>
                        <span>Graduated {dateFormatter(edu.gradate)}</span>
                        {edu.wam >= 50 && edu.wam <= 100 && (<span> · {wamSectioner(edu.wam)} (WAM: {edu.wam})</span>)}
                    </>
                ) : ('Ongoing')}
            </p>
        </div>
    );
}
function wamSectioner(wam) {
    let result;
    if (wam > 100) return null
    if (wam >= 80) result = 'High Distinction';
    else if (wam < 80 && wam >= 72) result = 'Distinction';
    else if (wam < 72 && wam >= 60) result = 'Credit';
    else result = 'Pass';
    return result
}
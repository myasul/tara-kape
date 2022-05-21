import { ChangeEventHandler, useState } from 'react'

export enum Day {
    Sunday = 1,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

const WHOLE_DAY_OPEN_NAME = 'is-24-hours-open'
const CLOSED_NAME = 'is-closed'
export const BUSINESS_HOURS_MODAL_NAME = 'business-hours-modal'

export const BusinessHoursModal = () => {
    const [day, setDay] = useState<string>()
    const [time, setTime] = useState<string>()
    const [is24Hours, setIs24Hours] = useState<boolean>()
    const [isClosed, setIsClosed] = useState<boolean>()

    const handleGeneralHourSelect: ChangeEventHandler<HTMLInputElement> = (event) => {
        const { target: { checked, name } } = event

        if (name === CLOSED_NAME) {
            setIsClosed(checked)
            if (checked) setIs24Hours(false)
        }

        if (name === WHOLE_DAY_OPEN_NAME) {
            setIs24Hours(checked)
            if (checked) setIsClosed(false)
        }
    }

    return (
        <section>
            <input type="checkbox" id={BUSINESS_HOURS_MODAL_NAME} className="modal-toggle" />
            <label className="modal cursor-pointer" htmlFor={BUSINESS_HOURS_MODAL_NAME}>
                <label className="modal-box relative" htmlFor=''>
                    <h3 className="font-bold text-lg">Select days & time</h3>
                    <div className="btn-group mt-4 text-sm flex justify-center align-middle">
                        <input
                            type="radio"
                            value={Day.Sunday}
                            onChange={({ target: { value } }) => setDay(value)}
                            name="options"
                            data-title="S"
                            className="btn text-header-blue !w-[12%] bg-white border-gray-200 !rounded-full !m-[2px] text-sm !px-3"
                        />
                        <input
                            type="radio"
                            value={Day.Monday}
                            onChange={({ target: { value } }) => setDay(value)}
                            name="options"
                            data-title="M"
                            className="btn text-header-blue !w-[12%] bg-white border-gray-200 !rounded-full !m-[2px] text-sm !px-3"
                        />
                        <input
                            type="radio"
                            value={Day.Tuesday}
                            onChange={({ target: { value } }) => setDay(value)}
                            name="options"
                            data-title="T"
                            className="btn text-header-blue !w-[12%] bg-white border-gray-200 !rounded-full !m-[2px] text-sm !px-3"
                        />
                        <input
                            type="radio"
                            value={Day.Wednesday}
                            onChange={({ target: { value } }) => setDay(value)}
                            name="options"
                            data-title="W"
                            className="btn text-header-blue !w-[12%] bg-white border-gray-200 !rounded-full !m-[2px] text-sm !px-3"
                        />
                        <input
                            type="radio"
                            value={Day.Thursday}
                            onChange={({ target: { value } }) => setDay(value)}
                            name="options"
                            data-title="T"
                            className="btn text-header-blue !w-[12%] bg-white border-gray-200 !rounded-full !m-[2px] text-sm !px-3"
                        />
                        <input
                            type="radio"
                            value={Day.Friday}
                            onChange={({ target: { value } }) => setDay(value)}
                            name="options"
                            data-title="F"
                            className="btn text-header-blue !w-[12%] bg-white border-gray-200 !rounded-full !m-[2px] text-sm !px-3"
                        />
                        <input
                            type="radio"
                            value={Day.Saturday}
                            onChange={({ target: { value } }) => setDay(value)}
                            name="options"
                            data-title="S"
                            className="btn text-header-blue !w-[12%] bg-white border-gray-200 !rounded-full !m-[2px] text-sm !px-3"
                        />
                    </div>
                    <div className='flex justify-between mt-4'>
                        <label className="label cursor-pointer flex gap-2">
                            <span>Open 24 hours</span>
                            <input
                                type="checkbox"
                                name={WHOLE_DAY_OPEN_NAME}
                                className="checkbox"
                                checked={is24Hours}
                                onChange={handleGeneralHourSelect}
                            />
                        </label>
                        <label className="label cursor-pointer flex gap-2">
                            <span>Closed</span>
                            <input
                                type="checkbox"
                                name={CLOSED_NAME}
                                className="checkbox"
                                checked={isClosed}
                                onChange={handleGeneralHourSelect}
                            />
                        </label>
                    </div>
                    <div className='flex flex-col gap-2 mt-4'>
                        <div className='flex gap-1'>
                            <label className="label">Open</label>
                            <input type="time" className="input input-bordered w-3/6" />
                        </div>
                        <div className='flex gap-1'>
                            <label className="label">Close</label>
                            <input type="time" className="input input-bordered w-3/6" />
                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor={BUSINESS_HOURS_MODAL_NAME} className="btn btn-success normal-case text-lg">Save</label>
                    </div>
                </label>
            </label>
        </section>
    )
}
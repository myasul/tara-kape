import { ChangeEventHandler, useCallback, useEffect, useState } from 'react'

export enum Day {
    Sunday = 1,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

export type BusinessHours = {
    openTime: string | null
    closeTime: string | null
}

type BusinessHoursModalProps = {
    selectedDay?: Day
    businessHours?: BusinessHours
    onSaveBusinessHours?: (selectedDays: Day[], businessHours: BusinessHours) => void
}

const WHOLE_DAY_OPEN_NAME = 'is-24-hours-open'
const CLOSED_NAME = 'is-closed'
export const BUSINESS_HOURS_MODAL_NAME = 'business-hours-modal'

// TODO: Add validation to make sure day, opening time, and closing time
// have values. Add a way to let the users know what is missing.
export const BusinessHoursModal = ({ selectedDay, businessHours, onSaveBusinessHours }: BusinessHoursModalProps) => {
    const [selectedDays, setSelectedDays] = useState<Day[]>([])
    const [openTime, setOpenTime] = useState<string | null>()
    const [closeTime, setCloseTime] = useState<string | null>()
    const [is24Hours, setIs24Hours] = useState<boolean>()
    const [isClosed, setIsClosed] = useState<boolean>()

    useEffect(() => {
        if (!businessHours) return

        setOpenTime(businessHours.openTime)
        setCloseTime(businessHours.closeTime)

        if (
            businessHours.closeTime === '00:00' &&
            businessHours.openTime === '00:00'
        ) {
            setIs24Hours(true)
        }

        if (
            businessHours.closeTime === null &&
            businessHours.openTime === null
        ) {
            setIsClosed(true)
        }
    }, [selectedDay, businessHours])

    useEffect(() => {
        if (!selectedDay) return

        setSelectedDays([selectedDay])
    }, [selectedDay])

    const handleGeneralHourSelect: ChangeEventHandler<HTMLInputElement> = (event) => {
        const { target: { checked, name } } = event

        if (name === CLOSED_NAME) {
            setIsClosed(checked)

            if (checked) {
                setIs24Hours(false)
                setOpenTime(null)
                setCloseTime(null)
            }
        }

        if (name === WHOLE_DAY_OPEN_NAME) {
            setIs24Hours(checked)

            if (checked) {
                setIsClosed(false)
                setOpenTime('00:00')
                setCloseTime('00:00')
            }
        }
    }

    const handleDaySelect: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
        const { target: { checked, value } } = event

        if (isNaN(Number(value))) return

        const selectedDay = Number(value)

        if (checked) {
            setSelectedDays([...selectedDays, selectedDay])
        } else {
            setSelectedDays(selectedDays.filter(day => `${day}` !== value))
        }


    }, [selectedDays])

    const handleSave = useCallback(() => {
        if (!(
            onSaveBusinessHours &&
            selectedDays.length &&
            openTime !== undefined &&
            closeTime !== undefined
        )) return

        setSelectedDays([])
        setOpenTime(undefined)
        setCloseTime(undefined)
        setIs24Hours(undefined)
        setIsClosed(undefined)

        const businessHour = { openTime, closeTime }

        onSaveBusinessHours(selectedDays, businessHour)
    }, [selectedDays, openTime, closeTime, onSaveBusinessHours])

    return (
        <section>
            <input type="checkbox" id={BUSINESS_HOURS_MODAL_NAME} className="modal-toggle" />
            <label className="modal cursor-pointer" htmlFor={BUSINESS_HOURS_MODAL_NAME}>
                <label className="modal-box relative" htmlFor=''>
                    <h3 className="font-bold text-lg">Select days & time</h3>
                    <div className="btn-group mt-4 text-sm flex justify-around align-middle">
                        <input
                            type="checkbox"
                            checked={selectedDays.includes(Day.Sunday)}
                            onChange={handleDaySelect}
                            data-title="S"
                            value={Day.Sunday}
                            className="btn-checkbox text-header-blue !w-[12%] bg-white !border-gray-200 !rounded-full !m-[2px] text-sm !px-3"
                        />
                        <input
                            type="checkbox"
                            checked={selectedDays.includes(Day.Monday)}
                            onChange={handleDaySelect}
                            data-title="M"
                            value={Day.Monday}
                            className="btn-checkbox text-header-blue !w-[12%] bg-white !border-gray-200 !rounded-full !m-[2px] text-sm !px-3"
                        />
                        <input
                            type="checkbox"
                            checked={selectedDays.includes(Day.Tuesday)}
                            onChange={handleDaySelect}
                            data-title="T"
                            value={Day.Tuesday}
                            className="btn-checkbox text-header-blue !w-[12%] bg-white !border-gray-200 !rounded-full !m-[2px] text-sm !px-3"
                        />
                        <input
                            type="checkbox"
                            checked={selectedDays.includes(Day.Wednesday)}
                            onChange={handleDaySelect}
                            data-title="W"
                            value={Day.Wednesday}
                            className="btn-checkbox text-header-blue !w-[12%] bg-white !border-gray-200 !rounded-full !m-[2px] text-sm !px-3"
                        />
                        <input
                            type="checkbox"
                            checked={selectedDays.includes(Day.Thursday)}
                            onChange={handleDaySelect}
                            data-title="T"
                            value={Day.Thursday}
                            className="btn-checkbox text-header-blue !w-[12%] bg-white !border-gray-200 !rounded-full !m-[2px] text-sm !px-3"
                        />
                        <input
                            type="checkbox"
                            checked={selectedDays.includes(Day.Friday)}
                            onChange={handleDaySelect}
                            data-title="F"
                            value={Day.Friday}
                            className="btn-checkbox text-header-blue !w-[12%] bg-white !border-gray-200 !rounded-full !m-[2px] text-sm !px-3"
                        />
                        <input
                            type="checkbox"
                            checked={selectedDays.includes(Day.Saturday)}
                            onChange={handleDaySelect}
                            data-title="S"
                            value={Day.Saturday}
                            className="btn-checkbox text-header-blue !w-[12%] bg-white !border-gray-200 !rounded-full !m-[2px] text-sm !px-3"
                        />
                    </div>
                    <div className='flex justify-between mt-4'>
                        <label className="label cursor-pointer flex gap-2">
                            <input
                                type="checkbox"
                                name={WHOLE_DAY_OPEN_NAME}
                                className="checkbox"
                                checked={is24Hours}
                                onChange={handleGeneralHourSelect}
                            />
                            <span>Open 24 hours</span>
                        </label>
                        <label className="label cursor-pointer flex gap-2">
                            <input
                                type="checkbox"
                                name={CLOSED_NAME}
                                className="checkbox"
                                checked={isClosed}
                                onChange={handleGeneralHourSelect}
                            />
                            <span>Closed</span>
                        </label>
                    </div>
                    {!(is24Hours || isClosed) &&
                        <div className='flex gap-2 mt-4'>
                            <div>
                                <label htmlFor='open-time'>
                                    <span className="label-text-alt text-header-blue">Open Time</span>
                                </label>
                                <input
                                    type="time"
                                    name='open-time'
                                    className="input input-bordered w-full"
                                    onChange={({ target: { value } }) => setOpenTime(value)}
                                    value={openTime ?? ''}
                                />
                            </div>
                            <div>
                                <label htmlFor='close-time'>
                                    <span className="label-text-alt text-header-blue">Close Time</span>
                                </label>
                                <input
                                    type="time"
                                    name='close-time'
                                    className="input input-bordered w-full"
                                    onChange={({ target: { value } }) => setCloseTime(value)}
                                    value={closeTime ?? ''}
                                />
                            </div>
                        </div>
                    }
                    <div className="modal-action">
                        <label
                            htmlFor={BUSINESS_HOURS_MODAL_NAME}
                            className="btn btn-success normal-case text-lg"
                            onClick={handleSave}
                        >
                            Save
                        </label>
                    </div>
                </label>
            </label>
        </section>
    )
}
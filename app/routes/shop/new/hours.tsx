import { ArrowSmLeftIcon, PencilAltIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import { BusinessHours, BusinessHoursModal, BUSINESS_HOURS_MODAL_NAME, Day } from '~/components/shop/new/hours/BusinessHoursModal'

type BusinessSchedule = {
    [day in Day]?: BusinessHours
}

const Hours = () => {
    const [selectedDay, setSelectedDay] = useState<Day>()
    const [businessSchedule, setBusinessSchedule] = useState<BusinessSchedule>({})

    const handleBusinessHourChange = (selectedDays: Day[], businessHours: BusinessHours) => {
        const updatedBusinessSchedule: BusinessSchedule = {}

        for (const day of selectedDays) {
            updatedBusinessSchedule[day] = businessHours
        }

        setBusinessSchedule({ ...businessSchedule, ...updatedBusinessSchedule })
        setSelectedDay(undefined)
    }

    const formatBusinessHour = (businessSchedule: BusinessSchedule, day: Day) => {
        const businessHours = businessSchedule[day]

        if (!businessHours) return ''

        const { openTime, closeTime } = businessHours

        return `${openTime} - ${closeTime}`
    }

    return (
        <div className='h-full bg-white !text-header-blue flex flex-col flex-grow'>
            <header className='flex h-12 justify-start items-center pl-3 gap-4 shadow-md w-full'>
                <ArrowSmLeftIcon className='h-6 stroke-link-blue' />
                <h3 className='font-semibold'>Hours</h3>
            </header>
            <section className='flex flex-col w-11/12 mx-auto justify-between h-full mt-6 text-header-blue'>
                <section className='flex flex-col gap-5'>
                    <div className='flex justify-between w-full'>
                        <span>Sunday</span>
                        <div className='flex gap-2'>
                            <span>{formatBusinessHour(businessSchedule, Day.Sunday)}</span>
                            <label htmlFor={BUSINESS_HOURS_MODAL_NAME}>
                                <PencilAltIcon
                                    className='h-6 stroke-link-blue'
                                    onClick={() => setSelectedDay(Day.Sunday)}
                                />
                            </label>
                        </div>
                    </div>
                    <div className='flex justify-between w-full'>
                        <span>Monday</span>
                        <div className='flex gap-2'>
                            <span>{formatBusinessHour(businessSchedule, Day.Monday)}</span>
                            <label htmlFor={BUSINESS_HOURS_MODAL_NAME}>
                                <PencilAltIcon
                                    className='h-6 stroke-link-blue'
                                    onClick={() => setSelectedDay(Day.Monday)}
                                />
                            </label>
                        </div>
                    </div>
                    <div className='flex justify-between w-full'>
                        <span>Tuesday</span>
                        <div className='flex gap-2'>
                            <span>{formatBusinessHour(businessSchedule, Day.Tuesday)}</span>
                            <label htmlFor={BUSINESS_HOURS_MODAL_NAME}>
                                <PencilAltIcon
                                    className='h-6 stroke-link-blue'
                                    onClick={() => setSelectedDay(Day.Tuesday)}
                                />
                            </label>
                        </div>
                    </div>
                    <div className='flex justify-between w-full'>
                        <span>Wednesday</span>
                        <div className='flex gap-2'>
                            <span>{formatBusinessHour(businessSchedule, Day.Wednesday)}</span>
                            <label htmlFor={BUSINESS_HOURS_MODAL_NAME}>
                                <PencilAltIcon
                                    className='h-6 stroke-link-blue'
                                    onClick={() => setSelectedDay(Day.Wednesday)}
                                />
                            </label>
                        </div>
                    </div>
                    <div className='flex justify-between w-full'>
                        <span>Thursday</span>
                        <div className='flex gap-2'>
                            <span>{formatBusinessHour(businessSchedule, Day.Thursday)}</span>
                            <label htmlFor={BUSINESS_HOURS_MODAL_NAME}>
                                <PencilAltIcon
                                    className='h-6 stroke-link-blue'
                                    onClick={() => setSelectedDay(Day.Thursday)}
                                />
                            </label>
                        </div>
                    </div>
                    <div className='flex justify-between w-full'>
                        <span>Friday</span>
                        <div className='flex gap-2'>
                            <span>{formatBusinessHour(businessSchedule, Day.Friday)}</span>
                            <label htmlFor={BUSINESS_HOURS_MODAL_NAME}>
                                <PencilAltIcon
                                    className='h-6 stroke-link-blue'
                                    onClick={() => setSelectedDay(Day.Friday)}
                                />
                            </label>
                        </div>
                    </div>
                    <div className='flex justify-between w-full'>
                        <span>Saturday</span>
                        <div className='flex gap-2'>
                            <span>{formatBusinessHour(businessSchedule, Day.Saturday)}</span>
                            <label htmlFor={BUSINESS_HOURS_MODAL_NAME}>
                                <PencilAltIcon
                                    className='h-6 stroke-link-blue'
                                    onClick={() => setSelectedDay(Day.Saturday)}
                                />
                            </label>
                        </div>
                    </div>
                </section>
                <button className='btn btn-success w-full normal-case mx-auto text-lg mb-4'>
                    Save
                </button>
            </section>
            <BusinessHoursModal
                businessHours={selectedDay ? businessSchedule[selectedDay] : undefined}
                selectedDay={selectedDay}
                onSaveBusinessHours={handleBusinessHourChange}
            />
        </div>
    )
}

export default Hours

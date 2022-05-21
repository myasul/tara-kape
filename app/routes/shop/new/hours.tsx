import { ArrowSmLeftIcon, PencilAltIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import { BusinessHoursModal, BUSINESS_HOURS_MODAL_NAME } from '~/components/shop/new/hours/BusinessHoursModal'

const Hours = () => {
    const [sunday, setSunday] = useState()
    const [monday, setMonday] = useState()
    const [tuesday, setTuesday] = useState()
    const [wednesday, setWednesday] = useState()
    const [thursday, setThursday] = useState()
    const [friday, setFriday] = useState()
    const [saturday, setSaturday] = useState()

    const handleBusinessHourChange = () => {
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
                            <span>5:30 AM-12:00 AM</span>
                            <label htmlFor={BUSINESS_HOURS_MODAL_NAME}>
                                <PencilAltIcon className='h-6 stroke-link-blue' />
                            </label>
                        </div>
                    </div>
                    <div className='flex justify-between w-full'>
                        <span>Monday</span>
                        <div className='flex gap-2'>
                            <span>5:30 AM-12:00 AM</span>
                            <label htmlFor={BUSINESS_HOURS_MODAL_NAME}>
                                <PencilAltIcon className='h-6 stroke-link-blue' />
                            </label>
                        </div>
                    </div>
                    <div className='flex justify-between w-full'>
                        <span>Tuesday</span>
                        <div className='flex gap-2'>
                            <span>5:30 AM-12:00 AM</span>
                            <label htmlFor={BUSINESS_HOURS_MODAL_NAME}>
                                <PencilAltIcon className='h-6 stroke-link-blue' />
                            </label>
                        </div>
                    </div>
                    <div className='flex justify-between w-full'>
                        <span>Wednesday</span>
                        <div className='flex gap-2'>
                            <span>5:30 AM-12:00 AM</span>
                            <label htmlFor={BUSINESS_HOURS_MODAL_NAME}>
                                <PencilAltIcon className='h-6 stroke-link-blue' />
                            </label>
                        </div>
                    </div>
                    <div className='flex justify-between w-full'>
                        <span>Thursday</span>
                        <div className='flex gap-2'>
                            <span>5:30 AM-12:00 AM</span>
                            <label htmlFor={BUSINESS_HOURS_MODAL_NAME}>
                                <PencilAltIcon className='h-6 stroke-link-blue' />
                            </label>
                        </div>
                    </div>
                    <div className='flex justify-between w-full'>
                        <span>Friday</span>
                        <div className='flex gap-2'>
                            <span>5:30 AM-12:00 AM</span>
                            <label htmlFor={BUSINESS_HOURS_MODAL_NAME}>
                                <PencilAltIcon className='h-6 stroke-link-blue' />
                            </label>
                        </div>
                    </div>
                    <div className='flex justify-between w-full'>
                        <span>Saturday</span>
                        <div className='flex gap-2'>
                            <span>5:30 AM-12:00 AM</span>
                            <label htmlFor={BUSINESS_HOURS_MODAL_NAME}>
                                <PencilAltIcon className='h-6 stroke-link-blue' />
                            </label>
                        </div>
                    </div>
                </section>
                <button className='btn btn-success w-full normal-case mx-auto text-lg mb-4'>
                    Save
                </button>
            </section>
            <BusinessHoursModal />
        </div>
    )
}

export default Hours

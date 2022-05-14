import { ArrowSmLeftIcon, PencilAltIcon } from '@heroicons/react/outline'
import { useState } from 'react'

const Hours = () => {
    const [sunday, setSunday] = useState()
    const [monday, setMonday] = useState()
    const [tuesday, setTuesday] = useState()
    const [wednesday, setWednesday] = useState()
    const [thursday, setThursday] = useState()
    const [friday, setFriday] = useState()
    const [saturday, setSaturday] = useState()

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
                            <label htmlFor="hours-modal">
                                <PencilAltIcon className='h-6 stroke-link-blue' />
                            </label>
                        </div>
                    </div>
                    <div className='flex justify-between w-full'>
                        <span>Monday</span>
                        <div className='flex gap-2'>
                            <span>5:30 AM-12:00 AM</span>
                            <label htmlFor="hours-modal">
                                <PencilAltIcon className='h-6 stroke-link-blue' />
                            </label>
                        </div>
                    </div>
                    <div className='flex justify-between w-full'>
                        <span>Tuesday</span>
                        <div className='flex gap-2'>
                            <span>5:30 AM-12:00 AM</span>
                            <label htmlFor="hours-modal">
                                <PencilAltIcon className='h-6 stroke-link-blue' />
                            </label>
                        </div>
                    </div>
                    <div className='flex justify-between w-full'>
                        <span>Wednesday</span>
                        <div className='flex gap-2'>
                            <span>5:30 AM-12:00 AM</span>
                            <label htmlFor="hours-modal">
                                <PencilAltIcon className='h-6 stroke-link-blue' />
                            </label>
                        </div>
                    </div>
                    <div className='flex justify-between w-full'>
                        <span>Thursday</span>
                        <div className='flex gap-2'>
                            <span>5:30 AM-12:00 AM</span>
                            <label htmlFor="hours-modal">
                                <PencilAltIcon className='h-6 stroke-link-blue' />
                            </label>
                        </div>
                    </div>
                    <div className='flex justify-between w-full'>
                        <span>Friday</span>
                        <div className='flex gap-2'>
                            <span>5:30 AM-12:00 AM</span>
                            <label htmlFor="hours-modal">
                                <PencilAltIcon className='h-6 stroke-link-blue' />
                            </label>
                        </div>
                    </div>
                    <div className='flex justify-between w-full'>
                        <span>Saturday</span>
                        <div className='flex gap-2'>
                            <span>5:30 AM-12:00 AM</span>
                            <label htmlFor="hours-modal">
                                <PencilAltIcon className='h-6 stroke-link-blue' />
                            </label>
                        </div>
                    </div>
                </section>
                <button className='btn btn-success w-full normal-case mx-auto text-lg mb-4'>
                    Save
                </button>
            </section>
            <section>
                <input type="checkbox" id="hours-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Select days & time</h3>
                        <div className='flex justify-center align-middle w-full'>
                            <div className="btn-group mt-4 text-sm">
                                <input
                                    type="radio"
                                    name="options"
                                    data-title="S"
                                    className="btn text-header-blue !w-auto bg-white border-gray-200 !rounded-full m-[2px] text-sm"
                                />
                                <input
                                    type="radio"
                                    name="options"
                                    data-title="M"
                                    className="btn text-header-blue !w-auto bg-white border-gray-200 !rounded-full m-[2px] text-sm"
                                />
                                <input
                                    type="radio"
                                    name="options"
                                    data-title="T"
                                    className="btn text-header-blue !w-auto bg-white border-gray-200 !rounded-full m-[2px] text-sm"
                                />
                                <input
                                    type="radio"
                                    name="options"
                                    data-title="W"
                                    className="btn text-header-blue !w-auto bg-white border-gray-200 !rounded-full m-[2px] text-sm"
                                />
                                <input
                                    type="radio"
                                    name="options"
                                    data-title="T"
                                    className="btn text-header-blue !w-auto bg-white border-gray-200 !rounded-full m-[2px] text-sm"
                                />
                                <input
                                    type="radio"
                                    name="options"
                                    data-title="F"
                                    className="btn text-header-blue !w-auto bg-white border-gray-200 !rounded-full m-[2px] text-sm"
                                />
                                <input
                                    type="radio"
                                    name="options"
                                    data-title="S"
                                    className="btn text-header-blue !w-auto bg-white border-gray-200 !rounded-full m-[2px] text-sm"
                                />
                            </div>
                        </div>
                        <div className='flex justify-between mt-4'>
                            <label className="label cursor-pointer flex gap-2">
                                <span>Open 24 hours</span>
                                <input type="radio" name="radio-6" className="radio" checked />
                            </label>
                            <label className="label cursor-pointer flex gap-2">
                                <span>Closed</span>
                                <input type="radio" name="radio-6" className="radio" checked />
                            </label>
                        </div>
                        <div className='flex gap-2'>
                            <div className='flex mt-4 flex-col'>
                                <label className="label">Open</label>
                                <div className='flex gap-1'>
                                    <input type="text" className="input input-bordered w-3/6" />
                                    <select className="select select-bordered">
                                        <option>AM</option>
                                        <option>PM</option>
                                    </select>
                                </div>
                            </div>
                            <div className='flex mt-4 flex-col'>
                                <label className="label">Close</label>
                                <div className='flex gap-1'>
                                    <input type="text" className="input input-bordered w-3/6" />
                                    <select className="select select-bordered">
                                        <option>AM</option>
                                        <option>PM</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="modal-action">
                            <label htmlFor="hours-modal" className="btn btn-success normal-case text-lg">Save</label>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hours

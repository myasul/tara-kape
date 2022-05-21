import { ArrowSmLeftIcon } from '@heroicons/react/outline'

const ShopNew = () => {
    return (
        <div className='h-full bg-white !text-header-blue flex flex-col flex-grow'>
            <header className='flex h-12 justify-start items-center pl-3 gap-4 shadow-md w-full'>
                <ArrowSmLeftIcon className='h-6 stroke-link-blue' />
                <h3 className='font-semibold'>Add new shop</h3>
            </header>
            <section className='flex flex-col w-11/12 mx-auto justify-between h-full mt-4 text-header-blue'>
                <section className='flex flex-col gap-2'>
                    <div className='flex flex-col-reverse gap-1'>
                        <input
                            required
                            type="text"
                            name='shop-name'
                            className='input input-bordered w-full border-2 peer'
                        />
                        <label
                            htmlFor="shop-name"
                            className='label label-text text-header-blue peer-focus:text-link-blue peer-focus:font-semibold'
                        >
                            Name
                        </label>
                    </div>
                    <div className='flex flex-col-reverse gap-1'>
                        <input
                            type="text"
                            name='description'
                            className='input input-bordered w-full border-2 peer'
                        />
                        <label
                            htmlFor="shop-name"
                            className='label label-text text-header-blue peer-focus:text-link-blue peer-focus:font-semibold'
                        >
                            Description
                        </label>
                    </div>
                    <div className='flex flex-col-reverse gap-1'>
                        <input
                            type="text"
                            name='description'
                            className='input input-bordered w-full border-2 peer'
                        />
                        <label
                            htmlFor="shop-name"
                            className='label label-text text-header-blue peer-focus:text-link-blue peer-focus:font-semibold'
                        >
                            Address
                        </label>
                    </div>
                    <div className='flex gap-2'>
                        <div className='flex flex-col-reverse gap-2 w-full'>
                            <input
                                type="text"
                                name='description'
                                className='input input-bordered w-full border-2 peer'
                            />
                            <label
                                htmlFor="shop-name"
                                className='label label-text text-header-blue peer-focus:text-link-blue peer-focus:font-semibold'
                            >
                                Province
                            </label>
                        </div>
                        <div className='flex flex-col-reverse gap-2 w-full'>
                            <input
                                type="text"
                                name='description'
                                className='input input-bordered w-full border-2 peer'
                            />
                            <label
                                htmlFor="shop-name"
                                className='label label-text text-header-blue peer-focus:text-link-blue peer-focus:font-semibold'
                            >
                                City / Town
                            </label>
                        </div>
                    </div>
                    <div className='flex flex-col-reverse gap-1'>
                        <input
                            type="text"
                            name='description'
                            className='input input-bordered w-full border-2 peer'
                        />
                        <label
                            htmlFor="shop-name"
                            className='label label-text text-header-blue peer-focus:text-link-blue peer-focus:font-semibold'
                        >
                            Phone Number
                        </label>
                    </div>
                    <div className='flex flex-col-reverse gap-1'>
                        <input
                            type="text"
                            name='description'
                            className='input input-bordered w-full border-2 peer'
                        />
                        <label
                            htmlFor="shop-name"
                            className='label label-text text-header-blue peer-focus:text-link-blue peer-focus:font-semibold'
                        >
                            Hours
                        </label>
                    </div>
                </section>
                <button className='btn btn-success w-full normal-case mx-auto text-lg mb-4'>
                    Save
                </button>
            </section>
        </div>
    )
}

export default ShopNew
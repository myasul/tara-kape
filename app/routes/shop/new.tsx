import { ArrowSmLeftIcon } from '@heroicons/react/outline'

const ShopNew = () => {
    return (
        <div className='h-screen bg-white text-header-blue'>
            <header className='flex h-12 justify-start items-center pl-3 gap-4 shadow-md w-full'>
                <ArrowSmLeftIcon className='h-6 stroke-link-blue' />
                <h3 className='font-semibold'>Add new shop</h3>
            </header>
            <section className='flex flex-col'>
                <button className='btn btn-success w-10/12 normal-case mx-auto text-lg'>
                    Save
                </button>
            </section>
        </div>
    )
}

export default ShopNew
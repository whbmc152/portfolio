import '../css/greeting.css'

const Greeting = () => {

    return (
        <div className='
            greetingContainer
            flex
            flex-col
            items-center
            justify-center
            mt-20
            w-screen
            h-2/3
        '>
            <div className='
            flex
            flex-row
            justify-start
            items-center
            w-3/4
            h-auto
            mb-4
            tracking-[0.2rem]
            sm:text-xl
            md:text-3xl
            xl:text-5xl
            font-bold
            '>
                Hi there,
            </div>
            <div className='
            flex
            flex-row
            justify-start
            items-center
            w-3/4
            h-auto
            mb-12
            tracking-[0.2rem]
            sm:text-xl
            md:text-3xl
            xl:text-5xl
            font-bold
            '>
                My name is&nbsp;<span className='text-orange-400'>Phạm Gia Huy</span>
            </div>
            <div className='
            flex
            flex-row
            justify-start
            items-center
            w-3/4
            h-auto
            tracking-[0.2rem]
            sm:text-md
            md:text-lg
            xl:text-xl'>
                I'm a&nbsp;<span className='text-orange-400'>Front-end developer</span>
            </div>
        </div>
    )
}

export default Greeting
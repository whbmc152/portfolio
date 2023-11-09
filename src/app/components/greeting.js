import '../css/greeting.css'

const Greeting = () => {

    return (
        <div className='
            greetingContainer
            flex
            flex-col
            items-center
            justify-center
            h-1/4
            bg-[#20202380]
            backdrop-blur-[2px]
            rounded-3xl
            px-20
            my-20
            mx-10
        '>
            <div className='
            flex
            flex-row
            justify-start
            items-center
            w-full
            h-auto
            tracking-[0.2rem]
            sm:text-xl
            md:text-2xl
            xl:text-3xl
            font-bold
            '>
                Hi there,
            </div>
            <div className='
            flex
            flex-row
            justify-start
            items-center
            w-full
            h-auto
            mt-4
            tracking-[0.1rem]
            sm:text-base
            md:text-lg
            xl:text-xl
            font-bold
            '>
                My name is&nbsp;<span className='text-orange-400'>Phạm Gia Huy</span>
                . I'm currently a&nbsp;<span className='text-orange-400'>Front-end developer</span>
                . Welcome to&nbsp;<span className='text-orange-400'>my blog</span>.
            </div>
        </div>
    )
}

export default Greeting
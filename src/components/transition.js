import {motion} from 'framer-motion'

import '../css/transition.css'

const transition = (OriginComponent) => {
    return () => (
        <>
        <OriginComponent/>
        <motion.div 
        className="
        transition_slide_in
        "
        initial = {{scaleY: 0}}
        animate = {{scaleY: 0}}
        exit = {{scaleY: 1}}
        transition = {{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div 
        className="
        transition_slide_out
        "
        initial = {{scaleY: 1}}
        animate = {{scaleY: 0}}
        exit = {{scaleY: 0}}
        transition = {{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
        </>
    )
}

export default transition;
'use client';
import Typewriter from 'typewriter-effect';


export default function TypeWriterComponent({text}:{text:string[]}) {
    return (
        <div className="p-[7px]">
            <Typewriter
            options={{
                strings: text,
                autoStart: true,
                loop: true,
            }}
            />
        </div>
    );
}


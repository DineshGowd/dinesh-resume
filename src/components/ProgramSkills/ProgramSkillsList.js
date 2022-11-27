import React from 'react'

export const Button = ({ size, color, text, ...props }) => {
    return (
        <button style={{
            padding: size === 'large' ? '32px' : '8px',
            fontSize: size === 'large' ? '32px' : '16px',
            // backgroundColor: color,
            alignItems: 'center',
            backgroundColor: '#0A66C2',
            border: '0',
            borderRadius: '100px',
            boxSizing: 'borderBox',
            color: '#ffffff',
            cursor: 'pointer',
            display: 'inlineFlex',
            fontFamily: 'AppleSystem, systemUi, systemUi, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sansSerif',
            fontWeight: '600',
            justifyContent: 'center',
            lineHeight: '20px',
            maxWidth: '480px',
            minHeight: '40px',
            minWidth: '0px',
            overflow: 'hidden',
            paddingLeft: '20px',
            paddingRight: '20px',
            textAlign: 'center',
            touchAction: 'manipulation',
            transition: 'backgroundColor 0.167s cubicBezier(0.4, 0, 0.2, 1) 0s, boxShadow 0.167s cubicBezier(0.4, 0, 0.2, 1) 0s, color 0.167s cubicBezier(0.4, 0, 0.2, 1) 0s',
            userSelect: 'none',
            verticalAlign: 'middle',
            margin: '10px 10px 0 0',
        }}{...props }> { text }</button >
    )
}


export const StrengthButton = props => {
    return (
        <Button {...props} />
    )
}

const ProgramSkillsList = ({ programSkillsItem }) => {
    const { title } = programSkillsItem;
    return (
        <>
           <StrengthButton text={title} />
        </>
    );
}

export default ProgramSkillsList
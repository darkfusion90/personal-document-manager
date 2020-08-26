import React from 'react'

interface PdfEmbedProps {
    className?: string | undefined
    src: string
}

const PdfEmbed = ({ className, src }: PdfEmbedProps) => {
    return <embed
        className={className}
        width='100%'
        height='100%'
        src={src}
        type='application/pdf'
    />
}

export default PdfEmbed

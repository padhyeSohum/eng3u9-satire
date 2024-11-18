interface ParagraphProps {
    header?: string,
    content: string,
};

export default function Paragraph({header, content}: ParagraphProps) {
    return (
        <div>
            {header && <div className="w-full text-2xl font-semibold text-pretty text-left leading-relaxed mb-2 capitalize">{header}</div>}
            <div className="w-full text-xl text-pretty text-left leading-relaxed mb-8">{content}</div>
        </div>
    )
}
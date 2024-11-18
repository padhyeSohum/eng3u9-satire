interface ParagraphProps {
    content: string,
};

export default function Paragraph({content}: ParagraphProps) {
    return (
        <div className="w-full text-xl text-pretty text-justify leading-relaxed mb-8">{content}</div>
    )
}
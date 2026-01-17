export function richTextRenderer(htmlContent) {
	if (!htmlContent) return null;

	return <div className="rich-text-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

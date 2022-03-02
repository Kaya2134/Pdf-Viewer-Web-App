import { Document, pdfjs, Page } from 'react-pdf';
import { useState } from 'react';
import _ from 'lodash';
import { useParams, Link } from 'react-router-dom'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PDFDocument() {
	const [numPages, setNumPages] = useState(0);
	const [loaded, setLoaded] = useState(false);
	let params = useParams()

	const onDocumentLoadSuccess = ({ numPages: pages }) => {
		setNumPages(pages);
		setLoaded(true);
	};

	return (
		<div>
			<Link to="/">Go back</Link>
			<Document
				file={{ url: 'http://localhost:3001/'+params.filename }}
				onLoadError={console.error}
				onLoadSuccess={onDocumentLoadSuccess}>
				{loaded ? (
					<ol>
						{_.times(numPages, (i) => (
							<Page pageNumber={i + 1} />
						))}
					</ol>
				) : (
					<h2>Wait</h2>
				)}
			</Document>
		</div>
	);
}

export default PDFDocument;

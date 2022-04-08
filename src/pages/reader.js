import * as React from 'react'
import Layout from '../components/layout'

import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


const ReaderPage = ({ data }) => {

    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    console.log(data)

    return (
        <Layout pageTitle="Reader">
            <div
                style={{
                    height: '750px',
                    width: '900px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}            
            >
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.js">
                        <Viewer
                            fileUrl="/story.pdf"
                            plugins={[defaultLayoutPluginInstance]}
                        />
                    
                </Worker>
            </div>

            <div>
                <p>{data.allPdf.edges.node.id}</p>
            </div>
        </Layout>
    );
}

export const query = graphql`query {
    allPdf {
      edges {
        node {
          id
        }
      }
    }
  }
  `

export default ReaderPage
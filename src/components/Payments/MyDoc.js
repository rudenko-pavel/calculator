import { Document, Page, PDFViewer,View,Text,StyleSheet  } from "@react-pdf/renderer";
import React from "react";

class MyDoc extends React.Component {
  render() { console.log(this.props.data[0])
    const styles = StyleSheet.create({
      page: {
        flexDirection: "row"
      },
        section: {
          flexGrow: 1
        }
      });
      
      const MyDocument = (
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text>Hello World!</Text>
            </View>
            <View style={styles.section}>
              <Text>{this.props.data[0].interestPayment}</Text>
            </View>
          </Page>
        </Document>
      );

    return <PDFViewer>{MyDocument}</PDFViewer>;
  }
}

export default MyDoc;

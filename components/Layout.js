import styles from '@/styles/Layout.module.css'
import {Footer, Header, Nav, Table, Pagination, Modal} from "@/components";
export function Layout({ children }){
  return (<div className={styles.container}>
        <Header/>
        <Nav/>
        <main className={styles.main}>{children}</main>
        <Table/>
        <Pagination/>
        <Footer/>
        <Modal/>
      </div>
  );
}
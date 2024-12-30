import OurPortfolio from "../ui/OurPortfolio"
import SubPageHero from "../ui/SubPageHero"
import Data from '../data/data'
import useTital from "../hooks/useTital"
import { useLoaderData } from "react-router"

const Project = () => {
  useTital('Project')

  const {data,name}=useLoaderData()

  return (
    <>
    <SubPageHero tital='The Future of Robots - Collaboration or Cooperation?' name={name}/>
    <OurPortfolio data={data} />
    </>
  )
}

export function Loader(){
  const portfolio = {data:Data.portfolio.data ,name:Data.portfolio.name}
  return portfolio
}
export default Project
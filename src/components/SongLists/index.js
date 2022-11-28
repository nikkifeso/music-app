import React from "react";
import { ListContainer, Container, DivStyle } from './style';
import SongCard from '../SongCard';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import { releasedAction } from '../../redux/released/releasedAction';
import { genresAction } from '../../redux/genres/genresAction';
import { featuredAction } from '../../redux/featured/featuredAction';
import { useDispatch, useSelector }  from 'react-redux';
import { useEffect } from 'react';

const SongLists =()=>{ 
    const dispatch = useDispatch();
    const { releasedReducer } = useSelector(state=> state)
    const { genresReducer } = useSelector(state=> state)
    const { featuredReducer } = useSelector(state=> state)

    const SongData = releasedReducer?.releasedData?.data?.tracks?.data;
    const GenresData = genresReducer?.genresData?.data?.tracks?.data;
    const FeaturedData = featuredReducer?.featuredData?.data?.tracks?.data;

      
    const handleNext= () => {
        
    }
    const handlePrev= () => {
        
    }
    
    useEffect(()=>{
        dispatch(releasedAction())
        dispatch(genresAction())
        dispatch(featuredAction())
    },[dispatch])


     
    return (
        <>
            <Container>
                <ListContainer>                 
                    <div>
                    <h5>RELEASED THIS WEEK</h5>
                        <hr/>
                        <FaAngleLeft onClick={handlePrev}/>
                        <FaAngleRight onClick={handleNext}/>
                    </div>
                    <DivStyle>
                        {SongData?.map((song)=>{
                            return (
                                <SongCard song={song} key={song.id} image={song.artist.picture} title={song.title} preview={song.preview}/>
                            )
                        })}
                    </DivStyle>               
                </ListContainer>
                <ListContainer>
                    <div>
                    <h5>FEATURED PLAYLISTS</h5>
                        <hr/>
                        <FaAngleLeft onClick={handlePrev}/>
                        <FaAngleRight onClick={handleNext}/>
                    </div>     
                    <DivStyle>
                        {FeaturedData?.map((featured)=>{
                            return (
                                <SongCard song={featured} key={featured.id} image={featured.artist.picture} title={featured.title} preview={featured.preview}/>
                            )
                        })}
                    </DivStyle>
                </ListContainer>
                <ListContainer>
                    <div>
                    <h5>BROWSE</h5>
                        <hr/>
                        <FaAngleLeft onClick={handlePrev}/>
                        <FaAngleRight onClick={handleNext}/>
                    </div>                   
                    <DivStyle>
                        {GenresData?.map((genres)=>{
                            return (
                                <SongCard song={genres} key={genres.id} image={genres.artist.picture} title={genres.title} preview={genres.preview}/>
                            )
                        })}
                    </DivStyle>
                </ListContainer>
                
            </Container>
        </>
    )
}

export default SongLists;
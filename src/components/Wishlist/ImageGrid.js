import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import tile1 from '../../MotorAssets/tile1.jpg';
import tile2 from '../../MotorAssets/tile2.jpg';
import tile3 from '../../MotorAssets/tile3.jpg';
import tile4 from '../../MotorAssets/tile4.jpg';
import tile5 from '../../MotorAssets/tile5.jpg';
import tile6 from '../../MotorAssets/tile6.jpg';
import tile7 from '../../MotorAssets/tile7.jpg';
import tile8 from '../../MotorAssets/tile8.jpg';
import tile9 from '../../MotorAssets/tile9.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: 550,
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));

const tileData = [
    {
        img: tile1,
        title: 'Image',
        cols: 1,
    },
    {
        img: tile2,
        title: 'Image',
        cols: 2,
    },
    {
        img: tile3,
        title: 'Image',
        cols: 3,
    },
    {
        img: tile4,
        title: 'Image',
        cols: 2,
    },
    {
        img: tile5,
        title: 'Image',
        cols: 1,
    },
    {
        img: tile6,
        title: 'Image',
        cols: 3,
    },
    {
        img: tile7,
        title: 'Image',
        cols: 2,
    },
    {
        img: tile8,
        title: 'Image',
        cols: 1,
    },
    {
        img: tile9,
        title: 'Image',
        cols: 3,
    },
]


export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
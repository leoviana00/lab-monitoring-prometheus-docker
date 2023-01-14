#!/bin/bash


if [ $1 ]; then
    NUM_PROC=$1
else
    NUM_PROC=10
fi

for i in `seq 0 $((NUM_PROC-1))`; do
    awk 'BEGIN {for(i=0;i<10000;i++)for(j=0;j<10000;j++);}' &
done
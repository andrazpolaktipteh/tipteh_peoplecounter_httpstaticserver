#!/bin/bash
echo "PeopleCounterFrontEnd_Main: Deploy -> Start."

rsync -av "$PWD/" ~/tipteh/peoplecounter/tipteh_peoplecounter_httpstaticserver/ --exclude={'*.git','.history','.gitignore'}

echo "PeopleCounterFrontEnd_Main: Deploy -> End."
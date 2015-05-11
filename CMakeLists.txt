cmake_minimum_required(VERSION 2.8)
project(trelp)

add_custom_target(
    trelp-test ALL
    npm install
    COMMAND npm test
    #COMMAND npm install -g istanbul
    #COMMAND istanbul cover bin/trelp
    WORKING_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}
    )

# add_subdirectory(nim) -- nim support on CI is a pain!!!

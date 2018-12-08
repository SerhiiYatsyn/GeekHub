/*
#########
#@#######
#    ####
#### ####
####  ###
##### ###
##### ###
#####   #
#######*#
#########
 */


for (let i = 0;i < 3; i++){
    while (isFree('south')) {
        south(); }
    while (isFree('east')) {
        east();
    }
}
south();
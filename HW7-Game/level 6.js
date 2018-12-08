/*
#########
#@#     #
# ## ## #
# #  ## #
# # ### #
# # #   #
#   # # #
### # ###
#   #  *#
#########
 */


while (isFree('south')) south();
while (isFree('east'))  east();
for (i = 0; i < 2; i++) {
    while (isFree('north')) north();
    east();
    while (isFree('east'))  east();
}
while (isFree('south')) south();
north();
west()
while (isFree('west'))  west();
while (isFree('south')) south();
while (isFree('east'))  east();

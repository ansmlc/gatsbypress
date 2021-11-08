### Fix error: 
- WP site missing "wordsby-menu" menu. Allow user to set a custom menu name via .env file? Or just avoid the error and render a message instead?
- Life of a Winner WP source: Blog pagination & category listing broken
### Improve:
- Breadcrumb category listing: skip showing 'Featured' cat
### Notes:
- WordPress permalink settings set to 'Post Name'. Default category and tag base slugs. Main menu supports pages only. Posts and categories will not have proper URL structure. 
- Author fields?

# TO DO 

### Footer
- [ x ] Set dynamic description
- [ x ] Set dynamic menu items in footers
- [   ] Add social buttons component in footer

### Author page
- [  ] Fix number of posts / "undefined"
- [  ] Limit number of post to last 10
- [  ] Fix layout

###  Other
- [ x ] refactor layout, nav and footer so place all queries in layout.js
- [ x ] setup sourcing of logo from local folder (wp unreliable)
- [ x ] setup theming with chakra-ui
- [ x ] custom button component for primary and secondary buttons
- [   ] fix breadcrumb vertical alignment
- [   ] set all images to use blurred image placeholder while loading

### Mobile
- [   ] fix hamburger menu icon
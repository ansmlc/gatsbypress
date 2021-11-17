### Fix error: 
- WP site missing "wordsby-menu" menu. Allow user to set a custom menu name via .env file? Or just avoid the error and render a message instead?
- Life of a Winner WP source: Blog pagination & category listing broken
### Improve:
- Breadcrumb category listing: skip showing 'Featured' cat
### Notes:
- WordPress permalink settings set to 'Post Name'. Default category and tag base slugs. Main menu supports pages only. Posts and categories will not have proper URL structure. 
- Author fields? "Publicly displayed name" is required
- Post and page excerpts are required. Do not use "Read more".


### Personal 
- Realized I am late in projects because I cannot perceieve tasks and amount of work in the future

# TO DO 

### Footer
- [ x ] Set dynamic description
- [ x ] Set dynamic menu items in footers
- [ x ] Add social buttons component in footer

### Author page
- [ x ] Fix number of posts / "undefined"
- [ x ] Limit number of post to last 10
- [ x ] Fix layout

###  Other
- [ x ] refactor layout, nav and footer so place all queries in layout.js
- [ x ] setup sourcing of logo from local folder (wp unreliable)
- [ x ] setup theming with chakra-ui
- [ x ] custom button component for primary and secondary buttons
- [ x ] fix breadcrumb vertical alignment
- [ x ] set all images to use blurred image placeholder while loading
- [   ] refactor selectBlogCategory modal

### Frontpage
- [ x ] hero.js: Switch order of columns on mobile
- [ x ] hero.js: Refactor UI 
- [   ] replace featured posts with featured pages based on page meta field

### Mobile
- [ x ] fix hamburger menu icon
- [ x ] improve mobile menu UI
- [   ] fix post card author info not inline with image (Issues fixes itself after visting another page)
- [   ] open issue on github
- [   ] fix image border radius not working (on android working.. ?)
- [   ] fix pager buttons clipping viewport
- [   ] hamburger menu open/close animation

### Images
- [ x ] add border radius inside for images inside "wysiwyg" content
- [   ] fix border radius issues in cards


### Polishing
- [ x ] add scroll-reveal transitions
- [   ] 

### Cleanup 
- [   ] sort components in folders



### 10:19h

- [ x ] finish breadcrumbs seperator and alignment
- fix menu and color mode icons alignment on mobile
- [ x ] adjust icon for blog category filter


- pokazati dark theme
- pokazati PWA
" Vim syntax file
" Language: leafdata

if exists("b:current_syntax")
  finish
endif

" --- Punctuation ---
syntax match leafdataPunctuation "[\{\}\[\]]"

" --- Identifiers ---
syntax match leafdataIdentifier "\<[a-zA-Z$_][a-zA-Z0-9$_-]*\>"

" --- Numbers ---
syntax match leafdataNumber "-\?\(0\|[1-9][0-9]*\)\(\.[0-9]\+\)\?\([eE][+-]\?[0-9]\+\)\?"

" --- Constants ---
syntax keyword leafdataConstant null true false

" --- Strings ---
syntax region leafdataString start=+"+ skip=+\\\\\|\\"+ end=+"+ contains=leafdataEscape
syntax match leafdataEscape contained "\\\([\"\\/bfnrt]\|u[0-9a-fA-F]\{4\}\)"

" --- Typed CDATA ---
" Use matchgroup to style the bounding markers (type@") and the closing quote
syntax region leafdataCData
    \ start="\([a-zA-Z][a-zA-Z0-9]*\)\(@\)\(\"\)"
    \ end="\""
    \ contains=leafdataCDataInner
    \ keepend
    \ matchgroup=leafdataCDataMarker

" Style the raw text safely inside the CDATA quotes
syntax match leafdataCDataInner contained "[^\"]\+"

" --- Comments & Separators ---
syntax match leafdataComment "#.*$"
syntax match leafdataSeparator "[:=,]\+"

" --- Highlighting Links ---
highlight default link leafdataPunctuation Delimiter
highlight default link leafdataIdentifier  Identifier
highlight default link leafdataNumber      Number
highlight default link leafdataConstant    Constant
highlight default link leafdataString      String
highlight default link leafdataEscape      SpecialChar
highlight default link leafdataCDataMarker Type
highlight default link leafdataCDataInner  Special
highlight default link leafdataComment     Comment
highlight default link leafdataSeparator   Debug

let b:current_syntax = "leafdata"

# First Post

## Capabilities

This is my first post testing out the capabilities of [Vitepress](https://vitepress.dev/).

```
We have code snippets, and apparently you can
FOCUS // [!code focus]
On one specific line, if you'd like.
```

```py
def main():
  print("We have syntax highlighting!")                     # And you can copy
                                                            # Right here >
if __name__ == "__main__":
  main()
```

```py{2}
def main():
  print("We can also highlight lines, like this!")
  
  print("I don't like this line, let's delete it!") # [!code --]
  print("I love this line, let's add it!") # [!code ++]

  ptint("This has an error!") # [!code error]
  print('Single quotes or double quotes?') # [!code warning]

if __name__ == "__main__":
  main()
```

Just added line numbers! **Line 2 on each snippet is also pretty *cool***

![As you can see!](img/_line-numbers.png)

We can also import code snippets!

Below is a file from my [solved-problems](https://github.com/koiyakiya/solved-problems) github repository.

<<< @/code-snippets/LongestStreak.java

We can also have [code groups](https://vitepress.dev/guide/markdown#code-groups)!

::: code-group

<<< @/code-snippets/sort.js

<<< @/code-snippets/pyramid.c

:::

## Math!

I just added the ability to use LaTeX in the website, by putting the following in `config.mts`:

```ts
markdown: {
  lineNumbers: true, // [!code focus]
  math: true
},
```

...and by running:

```sh
npm add -D markdown-it-mathjax3
```

Now, we have... $\LaTeX$!!!

$$1=1$$

...The quadratic formula:

$$x={-b \pm \sqrt{b^2-4ac} \over 2a}$$

...The pythagorean theorem:

$$a^2+b^2=c^2$$

...etc.

## Badges & Containers

<Badge type="info" text="hi!" /> As you can see to the left, that's a badge.
<br>
<Badge type="warning" text="WARNING" /> I can add stuff like this...
<br>
<Badge type="danger" text="ERROR" /> ...and this!

For example...

<Badge type="danger" text="!" /> *This code will not compile!*

```py
def ur mother:
  wef
```

But, I can go one step further with *containers*:

:::danger Incorrect
```py
def ur mother:
  wef
```
:::

:::details Tip below!

**The first one to move is gay**

:::




## 最後に

Anyways, it's like 1 am right now. I should probably head to bed. I think Vitepress is pretty cooool

What I need to do tomorrow or some other day is to try to see if I can change the default Japanese font, since I'll probably be using it. Let's see how a normal Japanese sentence looks like, taken from [massif.la](https://massif.la/ja):

俺の言葉を聞いて、二人は怪訝そうな表情を浮かべる。

...doesn't look too bad, huh. Anyways. Goodnight! おやすみ！！

OH WAIT

lmao, just realized something that happened.

So I had this markdown to enable code groups as seen above:

```
::: code-group

<<< @/code-snippets/sort.js

<<< @/code-snippets/pyramid.c
```

But, I forgot to add the `:::` at the end, so stuff other things populated the tabs with nothing inside them lmao. Now *that's* why the code snippets I put after the code groups weren't working. 

I guess we'll end off with a lesson:

*ALWAYS END YOUR (CODE) STATEMENTS!*


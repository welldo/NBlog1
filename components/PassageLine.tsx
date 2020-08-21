import * as React from 'react'
// import ReactMarkdown from 'react-markdown'
// import CodeBlock from '../components/CodeBlock'
import LazyLoad from 'react-lazyload'
import '../scss/passageLine.scss'
//  '../scss/typo.scss'

/**
 * 单个文章组件
 */

export default ({ id, title, cover, summary, date }: Readonly<{
    title: string;
    summary: string;
    id: number;
    /**封面 */
    cover?: string;
    date?: string;
}>) => {
    const [expand, setExpand] = React.useState(false);
    return (
        <div key={id} className={"passage-item"}>
            <div className="passage-item-header">
                <a href={'/blog/' + id} className="passage-item-header-title">
                    {title.replace('&nbsp;', ' ')}
                </a>
                <meta itemProp="url" content={"https://blog.yungeeker.com/blog/" + id} />
                <meta itemProp="name" content={title} />
                <div className="passage-item-header-date">{date}</div>
            </div>
            <div className={`passage-item-content ${!expand && "passage-item-content-close"}`}>
                <div style={{ display: (cover && !expand) ? 'block' : 'none' }} className="passage-item-content-cover">
                    <div className="passage-item-content-cover-inner">
                        <LazyLoad><img alt={title.replace('&nbsp;', ' ')} src={cover} /></LazyLoad>
                    </div>
                </div>
                {/*<div className="typo passage-item-content-text">
                    {expand ? <ReactMarkdown
                        renderers={{
                            code: CodeBlock
                        }}
                        escapeHtml={false}
                        source={summary}>
                    </ReactMarkdown> : summary.replace(/\<[^\>]+\>/g, '')}
                </div>*/}
                <div className="typo passage-item-content-text">{summary.replace(/\<[^\>]+\>/g, '')}</div>
            </div>
            {/*<div onClick={() => {
                setExpand(!expand);
                if (expand) {
                    window.location.hash = String(id)
                }
            }} className={`passage-item-action ${expand ? 'passage-item-action-sticky' : ''}`}>
                <span className="passage-item-readmore">{expand ? "收起" : "展开全文"}</span>
            </div>*/}
            <div className={`passage-item-action`}>
                <a href={"/blog/" + id} className="passage-item-readmore">阅读全文</a>
            </div>
        </div>
    )
}
